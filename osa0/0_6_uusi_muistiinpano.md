```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser ->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: Palvelin luo resurssin ja muita pyyntöjä ei suoriteta.
```