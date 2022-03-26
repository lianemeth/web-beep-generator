import * as Tone from 'tone'

function CMajor(delay) {
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    const now = Tone.now()
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n", now + delay);
    synth.triggerAttackRelease("E4", "16n", now + delay + 0.5);
    synth.triggerAttackRelease("G4", "8n", now + delay + 1);
}

//attach a click listener to a play button
document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start();
    CMajor(0);
    CMajor(1.5);
	console.log('audio is ready')
})

//document.body.appendChild(component());
