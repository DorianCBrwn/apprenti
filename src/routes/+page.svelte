<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />
<!-- component -->
<div
  class="min-h-screen bg-cover bg-center bg-no-repeat"
  style="background-image: url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"
>
  <div class="flex justify-end">
    <div class="flex min-h-screen w-1/2 items-center justify-center bg-white">
      <div>
        <form>
          <div>
            <span class="text-sm text-gray-900">Welcome back</span>
            <h1 class="text-2xl font-bold">Login to your account</h1>
          </div>
          <div class="mt-5">
            <label class="text-md mb-2 block" for="password">Password</label>
            <input
              class="w-full rounded-md border-2 px-4 py-2 text-sm outline-none"
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <div class="my-3">
            <label class="text-md mb-2 block" for="email">Email</label>
            <input
              class="w-full rounded-md border-2 px-4 py-2 text-sm outline-none"
              type="email"
              name="password"
              placeholder="email"
            />
          </div>
          <div class="flex justify-between">
            <div>
              <input class="cursor-pointer" type="radio" name="rememberme" />
              <span class="text-sm">Remember Me</span>
            </div>
            <span class="cursor-pointer text-sm text-blue-700 hover:underline"
              >Forgot password?</span
            >
          </div>
          <div class="">
            <button
              class="mt-4 mb-3 w-full rounded-md bg-green-500 py-2 text-white transition duration-100 hover:bg-green-400"
              >Login now</button
            >
            <div
              class="flex  items-end justify-center space-x-2 rounded-md bg-gray-700 py-2 text-white transition duration-100 hover:bg-gray-600"
            >
              <img
                class=" h-5 cursor-pointer"
                src="https://i.imgur.com/arC60SB.png"
                alt=""
              />
              <button>Or sign-in with google</button>
            </div>
          </div>
        </form>
        <p class="mt-8">
          Dont have an account? <span
            class="cursor-pointer text-sm text-blue-600"
          >
            Join free today</span
          >
        </p>
      </div>
    </div>
  </div>
</div>
