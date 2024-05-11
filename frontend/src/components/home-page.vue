<template>
    <div>
        
    <div class="container">
    <div class="floating-box text-center">
      <h1 style="text-transform: capitalize;">Welcome to the movie rental store!</h1>
    </div>
  </div>
        
    </div>
</template>

<script setup>
  
</script>

<style scoped>
  .container {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.floating-box {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: bob 2s infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  padding: 20px;
  background-color: #343a40;
  color: #fff;
  border-radius: 10px;
}

@keyframes bob {
  0% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
  50% {
    transform: translate(-50%, -50%) translateY(10px);
  }
  100% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
}
</style>