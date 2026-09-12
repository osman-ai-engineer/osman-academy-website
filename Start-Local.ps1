$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
$env:NO_UPDATE_NOTIFIER = '1'
node .\node_modules\@docusaurus\core\bin\docusaurus.mjs serve --host 127.0.0.1 --port 3000 --no-open
