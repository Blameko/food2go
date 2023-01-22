<template>
  <div class="home"></div>

  <form action="/action_page.php">
    <div>
      <!-- <label for="email">Email</label> -->
      <input type="text" id="email" email="email" placeholder="Your Email." />
    </div>

    <div>
      <!-- <label for="password">Password</label> -->

      <input
        type="text"
        id="password"
        name="Pass"
        placeholder="Enter Password."
      />
    </div>
    <div>
      <!-- <label for="Confirm Password">Confirm password</label> -->

      <input
        type="text"
        id="password"
        name="pass"
        placeholder="Confirm Password"
      />
    </div>

    <input type="submit" value="Login" />
  </form>
  <div class="menu">
    <img src="@/assets/shanghai.jpg" alt="menu" />
  </div>
  <div class="menu">
    <img src="@/assets/rice-egg.jpg" alt="menu" />
  </div>
  <div class="menu">
    <img src="@/assets/vegi-sald.jpg" alt="menu" />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
input[type="text"],
select {
  width: 75%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid rgb(117, 114, 114);
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 25%;
  background-color: #45a049;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #eb9413fa;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 5px;
}
</style>
