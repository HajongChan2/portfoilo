<template>
    <div class="col-12 footer">
        <div class="col-5 footer-text"><p>Copyright 2023. HAJONGCHAN. ALL RIGHTS RESERVED.</p></div>
    </div>
</template>

<style>
.footer{
    height: 50px;
    background-color: #333;
}
.footer-text{
    text-align: center;
}
.footer-text > p{
    font-size: 0.7em;
    color : #d9d9d9;
    font-weight: bold;
    padding-top: 15px;
}
@media (max-width: 480px) {
  .footer-text > p{
    font-size: 0.5em;
  }
}
</style>