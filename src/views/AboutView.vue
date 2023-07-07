<template>
  <div class="about">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1 class="animate__animated animate__bounce">
            Hello learn more about me:
          </h1>
          <h4 class="animate__animated animate__bounce">
            My name is <span>Taflynne Summer Petersen</span> , I am 18 years of
            age and an <span>aspiring Full Stack Developer.</span> <br />
            Along with coding, I am a musician as well,my two instruments are
            bass guitar and guitar.I believe strongly I up skilling one-self. I
            am very optimistic, but yet realistic and I enjoy a good challange
            where I know growth is certain. I am conservative person when it
            comes to traditional values. I enjoy outdoors ,and also libraries.
            <br />
            <br />
            Willing to relocate: Yes
          </h4>
        </div>

        <div class="col">
          <img
            src="https://i.postimg.cc/MKg87HZN/20230325-164749.jpg"
            alt="img"
            width="200px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style  scoped>
img {
  margin-top: 100px;
  border-radius: 50%;
  width: 300px;
  box-shadow: 2px 2px 2px 4px #ea79c2;
}
h1 {
  margin-top: 150px;
  font-family: Impact, "Haettenschweiler", "Arial Narrow Bold", sans-serif;
}
h4 {
  font-family: "Gill Sans", "Gill Sans MT", "Calibri" "Trebuchet MS", sans-serif;
}

.row {
  display: grid;
  grid-template-columns: auto auto;
}

span {
  color: #ec6bbf;
}
@media (width < 600px) {
  .row {
    grid-template-columns: auto;
  }
}
.about {
  background-image: linear-gradient(
    to right top,
    #ff65c9,
    #bd4b8c,
    #7c3457,
    #3f1e2b,
    #000000
  );
  color: white;
}
</style>