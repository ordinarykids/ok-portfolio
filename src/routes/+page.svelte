<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut
    });
</script>



<div class="grid grid-cols-6 gap-1 home-grid w-3/4 m:w-full sm:w-full">
    <div>
        <a class="opacity-20 hover:opacity-100" href="/nike">
            <div class="relative bg-gray-200 flex justify-center items-center rounded-md object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 ">
                <img src="/nike-swoosh.png" class="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"/> 
            </div>
        </a>
    </div>
    <div>
        <div class="relative bg-gray-200 flex justify-center items-center">
            <img src="/stussy.png" style="opacity: 0.3"/> 
        </div>
    </div>
    <div>
        <a class="opacity-20 hover:opacity-100" href="/nike">
            <div class="relative bg-gray-200 flex justify-center items-center">
                <img src="/explo.png"/> 
            </div>
        </a>

    </div>
    <div>04</div>
    <div class="relative bottom-0  object-cover " style="background: url('/keithharing.jpg'); ">
        asdasd
    </div>
    <div class="relative bottom-0  object-cover " style="background: url('/keithharing-sm.jpg'); ">
        asdasd
    </div>
    <div class="relative bottom-0 object-cover " style="background: url('/keithharing-md.jpg'); ">
        asdasd
    </div>
    <div>08</div>
    <div>09</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
    <div>16</div>


  </div>

  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }


    .home-grid div {
        background-color: theme(colors.gray.200);
        height: 8vw;
        font-size: 0.5rem;
    }
  </style>