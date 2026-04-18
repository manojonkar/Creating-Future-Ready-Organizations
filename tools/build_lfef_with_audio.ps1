# Rebuilds LFEF_Testimonial_Video_with_audio.mp4: TTS narration + light bed + mux.
# Prereq: pip install edge-tts; ffmpeg on PATH (or edit $Ffmpeg).
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $PSScriptRoot
$ffCmd = Get-Command ffmpeg -ErrorAction SilentlyContinue
if (-not $ffCmd) {
  throw "ffmpeg not found on PATH. Install FFmpeg and retry."
}
$Ffmpeg = $ffCmd.Source

python generate_lfef_audio.py --script lfef_narration_script.txt --out lfef_narration.mp3

# Match narration length to video (241s)
& $Ffmpeg -y -i "lfef_narration.mp3" -filter:a "atempo=0.8525" -t 241 "lfef_narration_timed.wav"

$video = Join-Path $Root "LFEF_Testimonial_Video.mp4"
$out = Join-Path $Root "LFEF_Testimonial_Video_with_audio.mp4"

& $Ffmpeg -y `
  -i $video `
  -i "lfef_narration_timed.wav" `
  -f lavfi -i "anoisesrc=color=brown:r=48000:a=0.02:d=241" `
  -f lavfi -i "sine=frequency=196:sample_rate=48000:duration=241" `
  -f lavfi -i "sine=frequency=293.66:sample_rate=48000:duration=241" `
  -filter_complex "[2:a]lowpass=f=700,volume=0.18,afade=t=in:ss=0:d=3,afade=t=out:st=238:d=3[bed1];[3:a]volume=0.04[bed2];[4:a]volume=0.03[bed3];[bed1][bed2][bed3]amix=inputs=3:duration=first[bed];[1:a]aresample=48000,volume=1.0[voice];[voice][bed]amix=inputs=2:duration=first:normalize=0[aout]" `
  -map 0:v -map "[aout]" -c:v copy -c:a aac -b:a 192k -ar 48000 -ac 2 -t 241 `
  $out

Write-Host "Wrote $out"
