<template>
  <div class="section">
    <h1 class="title is-4">Create an item</h1>
    <form @submit.prevent="createItem">
      <div class="field">
        <label class="label">Title</label>
        <input v-model="item.title" class="input" type="text" placeholder="Add an item title">
      </div>
      <div class="field">
        <label class="label">Select a category</label>
        <div class="control">
          <div class="select">
            <select v-model="item.category">
              <option v-for="cat in categories" :key="cat">{{ cat }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <input v-model="item.description" class="input" type="text" placeholder="Add a description">
      </div>
      <div class="field">
        <label class="label">Location</label>
        <input v-model="item.location" class="input" type="text" placeholder="Add a location">
      </div>
      <div class="control">
        <button class="button is-link" type="submit" value="Submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: this.$store.state.categories,
      item: this.createFreshItemObject()
    }
  },
  methods: {
    createItem(item) {
      this.$store
        .dispatch('item/createItem', this.item)
        .then(() => {
          this.$router.push({ name: 'id', params: { id: this.item.id } })
          this.item = this.createFreshItemObject()
        })
        .catch(() => {
          console.log('There was a problem creating your item.')
        })
    },
    createFreshItemObject() {
      const user = this.$store.state.user
      const id = Math.floor(Math.random() * 10000000)
      const date = new Date()

      return {
        id: id,
        user: user,
        title: '',
        date: date,
        location: '',
        description: '',
        category: ''
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
