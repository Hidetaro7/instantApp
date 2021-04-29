<template>
  <div class=" container">
    <div class="prose max-w-xl m-auto pt-8">
      <form action="#">
        <h1>お問い合わせフォーム</h1>
        <div class="mb-4">
          <h2 class="text-gray-700 text-xl">御社（あなた様）の情報</h2>
          <label class="form-label">
            <span>御社名</span>
            <input class="form-input" type="text" placeholder="大阪高波株式会社">
          </label>
          <label class="form-label">
            <span>御担当者様</span>
            <input class="form-input w-7/12" type="text" placeholder="大阪 太郎">
          </label>
          <label class="form-label">
            <span>お電話番号</span>
            <input class="form-input w-6/12" type="tel" placeholder="06-1111-1234">
          </label>
          <label class="form-label">
            <span>メールアドレス</span>
            <input class="form-input w-10/12" type="email" placeholder="osaka@instant.co.jp">
          </label>
        </div>

        <div class="mb-4">
          <h2 class="text-gray-700 text-xl">お問い合わせ内容</h2>
          <textarea class="textarea" cols="30" rows="10"></textarea>
        </div>

        <label class="p-4 block flex justify-center items-center bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer">
          <input type="checkbox" class="mr-4">
          個人情報保護に関する規約に同意します
        </label>

        <div class="py-8">
          <button class="button">送信</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
.form-label {
  @apply block mb-4;

}


</style>
