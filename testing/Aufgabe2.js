

// Wenn zwei Tests ".todo"-Suffix beinhalten
//         --> Es wird kein Test ausgeführt, da die beiden Tests mit ".todo"-Suffix nur als Platzhalter dienen

// Wenn ein Test ".only"-Suffix beinhaltet
//         --> Es wird nur ein Test ausgeführt

// Wenn drei Tests ".skip"-Suffix beinhalten
//         --> Kein Test wird ausgeführt, alle drei werden übersprungen

// Wenn 2 Tests in einem Describe geschachtelt sind und dieses Describe den Suffix ".only" trägt.
//         --> Es werden nur die beiden Tests in dem Describe ausgeführt. Andere Tests außerhalb des Describes werden übersprungen

// Wenn 2 Tests den Suffix ".failing" beinhalten.
//         --> Beide Tests laufen erfolgreich durch