"""Generate narration MP3 for LFEF testimonial video using Microsoft Edge TTS."""
from __future__ import annotations

import argparse
import asyncio
import sys

try:
    import edge_tts
except ImportError:
    print("Install: pip install edge-tts", file=sys.stderr)
    raise

# Warm, clear voice; Indian English reads names and rupee amounts naturally
VOICE = "en-IN-NeerjaNeural"
RATE = "-5%"  # slightly slower for reflective content


async def _run(text: str, out_path: str) -> None:
    communicate = edge_tts.Communicate(text, VOICE, rate=RATE)
    await communicate.save(out_path)
    print(f"Wrote {out_path}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--script",
        default="lfef_narration_script.txt",
        help="Path to plain-text narration script",
    )
    parser.add_argument(
        "--out",
        default="lfef_narration.mp3",
        help="Output MP3 path",
    )
    args = parser.parse_args()
    with open(args.script, encoding="utf-8") as f:
        text = f.read().strip()
    if not text:
        sys.exit("Empty script")
    asyncio.run(_run(text, args.out))


if __name__ == "__main__":
    main()
