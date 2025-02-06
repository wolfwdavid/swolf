<!-- src/lib/components/ThemeToggle.svelte -->
<script>
    import { theme } from '$lib/stores/theme';
    
    let currentTheme;
    theme.subscribe((value) => (currentTheme = value));
  
    const toggleTheme = () => {
      theme.set(currentTheme === 'light' ? 'dark' : 'light');
    };
  </script>
  
  <button on:click={toggleTheme}>
    {currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
  </button>
  