<script>
    export let data;
    console.log("display: ", data); // Ensure this logs the expected data structure
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#if data && data.menu}
        {#each data.menu as item}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{item.food}</div>
                    <p class="text-gray-700 text-base">
                        {item.discription}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${item.price}</span>
                </div>
            </div>
        {/each}
    {:else}
        <p>Loading...</p>
    {/if}
</div>
