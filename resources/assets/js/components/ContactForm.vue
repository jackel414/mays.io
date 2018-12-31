<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">

        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <form action="#" @submit.prevent="submitForm()" id="contact-form">
                <div class="form-group">
                    <label for="fullName">Name</label>
                    <input v-model="name" type="text" class="form-control" id="fullName" name="fullName" placeholder="Name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input v-model="email" type="email" class="form-control" id="email" name="email" placeholder="Email Address" required>
                </div>
                <div class="form-group">
                    <label for="comments">Comments</label>
                    <textarea v-model="message" class="form-control" rows="3" id="comments" name="comments"></textarea>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
          <span id="contact-close" @click="$emit('close')">x</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        mounted: function() {
            console.log('Component mounted.')
        },
        data: function() {
            return {
                showModal: false,
                name: '',
                email: '',
                message: ''
            }
        },
        methods: {
          submitForm: function() {
            let self = this;
            let params = {};
            params.name = self.name;
            params.email = self.email;
            params.message = self.message;

            axios.post('api/contact', params)
              .then(function(){
                self.$emit('close');
              })
              .catch(function(error){
                console.log(error);
              });
          }
        }
    }
</script>
