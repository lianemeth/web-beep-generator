import * as Tone from 'tone'

function TriadLoop(notes, interval) {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();
    const loop = new Tone.Loop(time => {
        synth.triggerAttackRelease(notes[0], "8n", time);
        synth.triggerAttackRelease(notes[1], "16n", time +  0.5);
        synth.triggerAttackRelease(notes[2], "8n", time +  1);
        }, interval).start(0);
    return loop
}

//attach a click listener to a play button
document.querySelector('button')?.addEventListener('click', async () => {
    await Tone.start()
    const loopA = TriadLoop(["C4", "E4", "G4"], "1n");
    const loopB = TriadLoop(["D4", "F#4", "A4"], "8n");
    Tone.Transport.start();
})

//document.body.appendChild(component());
