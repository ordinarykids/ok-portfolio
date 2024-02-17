<script>
    import { onMount } from "svelte";
    var recordButton, stopButton, recorder;
    let recordBtn;
    let stopBtn;

    onMount(() => {
        // recordButton = document.getElementById("record");
        // stopButton = document.getElementById("stop");

        // get audio stream from user's mic
        navigator.mediaDevices
            .getUserMedia({
                audio: true,
            })
            .then(function (stream) {
                recordBtn.disabled = false;
                // recordButton.addEventListener("click", startRecording);
                // stopButton.addEventListener("click", stopRecording);
                recorder = new MediaRecorder(stream);

                // listen to dataavailable, which gets triggered whenever we have
                // an audio blob available
                recorder.addEventListener("dataavailable", onRecordingReady);
            });
    });
</script>

<main>
    <p>
        <button bind:recordBtn on:click={startRecording} id="record">Record audio</button>
        <button bind:stopBtn on:click={stopRecording}  id="stop">Stop</button>
    </p>
    <p><audio id="audio" controls></audio></p>
</main>
