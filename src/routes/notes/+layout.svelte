
<script>
    let selected = 'google'; // Default selection
  
    const options = [
        { value: 'google', label: 'Google', url: 'https://www.google.com' },
        { value: 'duckduckgo', label: 'DuckDuckGo', url: 'https://duckduckgo.com' },
        { value: 'bing', label: 'Bing', url: 'https://www.bing.com' }
    ];
  
    function handleSelectChange(event) {
        selected = event.detail.value;
        window.location.href = options.find(option => option.value === selected).url;
    }
  </script>

<select bind:value={selected} on:change={handleSelectChange}>
    {#each options as option}
      <option value={option.value}>
          {option.label}
      </option>
    {/each}
  </select>
<div class="container m-auto w-3/4 bg-green-100">
    <slot />
</div>