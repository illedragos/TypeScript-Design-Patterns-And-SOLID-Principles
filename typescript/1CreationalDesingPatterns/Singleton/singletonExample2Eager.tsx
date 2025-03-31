class EagerSingleton {
  private static instance: EagerSingleton = new EagerSingleton(); // Instance created immediately

  private constructor() {
    console.log("Singleton instance created!");
  }

  public static getInstance(): EagerSingleton {
    return EagerSingleton.instance; // Always returns the pre-created instance
  }
}

// Usage
const instance11 = EagerSingleton.getInstance(); // Instance already exists
const instance22 = EagerSingleton.getInstance(); // Reuses the same instance
console.log(instance1 === instance2); // true


// | Feature                | Lazy Initialization                                    | Eager Initialization                                   |
// |------------------------|--------------------------------------------------------|--------------------------------------------------------|
// | **Creation Time**      | Created when first needed                              | Created immediately when class is loaded               |
// | **Use Case**           | Expensive or optional resources                        | Always-needed resources                                |
// | **Startup Impact**     | Faster startup (no resource load)                      | Slower startup (loads all resources)                   |
// | **Resource Usage**     | More efficient (resources used only when needed)       | May use more resources upfront                         |
// | **Complexity**         | Slightly more complex (requires checks)                | Simpler (always available)                             |
// | **Thread Safety**      | Needs synchronization for thread safety                | Thread-safe by default                                 |
// | **Example 1**          | Database connection (lazy on first query)              | Logging service (initialized at app startup)           |
// | **Example 2**          | API calls (fetch only when data is needed)             | Singleton services (initialized on startup)            |
// | **Example 3**          | Image loading (lazy load as they appear)               | In-memory caching (pre-loaded at startup)              |
// | **Example 4**          | File I/O (open when accessed)                          | Event listeners (added on page load)                   |
// | **Example 5**          | Large in-memory data (loaded on demand)                | Resource pools (thread pools initialized upfront)      |



