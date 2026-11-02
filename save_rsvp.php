<?php
/**
 * GESTORE RSVP PER ARUBA HOSTING (PHP)
 * Salva le conferme in un file CSV e/o invia un'email agli sposi.
 */

header('Content-Type: application/json; charset=utf-8');

// Permetti solo chiamate POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Metodo non consentito']);
    exit;
}

// Leggi il payload JSON o FORM POST
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name      = trim($data['name'] ?? '');
$attending = trim($data['attending'] ?? 'yes');
$guests    = intval($data['guests'] ?? 1);
$diet      = trim($data['dietary'] ?? 'Nessuna');
$song      = trim($data['song'] ?? '');
$timestamp = date('Y-m-d H:i:s');

if (empty($name)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Nome obbligatorio']);
    exit;
}

// 1. SALVATAGGIO SU FILE CSV (Scaricabile o consultabile via Excel)
$csvFile = __DIR__ . '/conferme_rsvp.csv';
$isNewFile = !file_exists($csvFile);

$fp = fopen($csvFile, 'a');
if ($fp) {
    if ($isNewFile) {
        // Intestazione colonne CSV
        fputcsv($fp, ['Data e Ora', 'Nome Ospite', 'Partecipa', 'Numero Ospiti', 'Esigenze Alimentari', 'Canzone'], ';');
    }
    fputcsv($fp, [
        $timestamp,
        $name,
        $attending === 'yes' ? 'Sì' : 'No',
        $guests,
        $diet,
        $song
    ], ';');
    fclose($fp);
}

// 2. (OPZIONALE) NOTIFICA VIA EMAIL
// Inserisci qui la tua email se desideri ricevere una notifica ad ogni RSVP
$emailSposi = ''; // Es: "tuaemail@gmail.com"

if (!empty($emailSposi) && filter_var($emailSposi, FILTER_VALIDATE_EMAIL)) {
    $oggetto = "Nuova risposta RSVP: " . $name . " (" . ($attending === 'yes' ? 'Partecipa' : 'Non partecipa') . ")";
    $messaggio = "Nuova conferma ricevuta dall'invito web:\n\n"
               . "Nome: $name\n"
               . "Conferma: " . ($attending === 'yes' ? 'SÌ, sarà presente' : 'NO, purtroppo non potrà') . "\n"
               . "Numero Ospiti: $guests\n"
               . "Esigenze alimentari: $diet\n"
               . "Canzone richiesta: $song\n"
               . "Data: $timestamp\n";
    
    $headers = "From: noreply@" . ($_SERVER['SERVER_NAME'] ?? 'invito-nozze.it') . "\r\n"
             . "Reply-To: noreply@" . ($_SERVER['SERVER_NAME'] ?? 'invito-nozze.it') . "\r\n"
             . "X-Mailer: PHP/" . phpversion();

    @mail($emailSposi, $oggetto, $messaggio, $headers);
}

echo json_encode([
    'success' => true,
    'message' => 'RSVP registrato con successo'
]);
