<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-1/2">
        <h2 class="text-2xl font-semibold mb-4">Create New Article</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
        <!-- General Error Message -->
        <div v-if="generalError" class="text-red-500">{{ generalError }}</div>
        
        <!-- Title Field -->
        <div>
            <label for="title" class="block text-blue-500	 font-semibold">Title:</label>
            <input v-model="form.title" type="text" id="title" class="w-full px-4 py-2 border rounded-md">
            <div v-if="errors.title" class="text-red-500">{{ errors.title[0] }}</div>
        </div>
        
        <!-- Category Field -->
        <div>
            <label for="category" class="block text-blue-500	 font-semibold">Category:</label>
            <select v-model="form.category" id="category" class="w-full px-4 py-2 border rounded-md">
            <option value="" selected>select Category</option>
            <option value="Technology" >Technology</option>
            <option value="Science">Science</option>
            <option value="Politics">Politics</option>
            <!-- Add more options as needed -->
            </select>
        </div>
        
        <!-- Author Field -->
        <div>
            <label for="author" class="block text-blue-500	 font-semibold">Author:</label>
            <input v-model="form.author" type="text" id="author" class="w-full px-4 py-2 border rounded-md">
            <div v-if="errors.author" class="text-red-500">{{ errors.author[0] }}</div>
        </div>
        
        <!-- Text Description Field -->
        <div>
            <label for="text" class="block text-blue-500	 font-semibold">Text Description:</label>
            <textarea v-model="form.text" id="text" class="w-full px-4 py-2 border rounded-md"></textarea>
            <div v-if="errors.text" class="text-red-500">{{ errors.text[0] }}</div>
        </div>
        
        <!-- Image Field -->
        <div>
            <label for="image" class="block text-blue-500	 font-semibold">Image:</label>
            <input type="file" id="image" @change="handleFileUpload" accept="image/*">
            <div v-if="errors.image" class="text-red-500">
            <div v-for="error in errors.image" :key="error">{{ error }}</div>
            </div>
        </div>
        
        <!-- Submit Button -->
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Create</button>
        </form>
    </div>
    </div>
</template>

<script>
import useArticleForm from '../composition-api/useArticleForm';

export default {
  setup() {
    const { form, errors, generalError, submitForm, handleFileUpload } = useArticleForm();
    return { form, errors, generalError, submitForm, handleFileUpload };
  }
};

</script>

<style>
/* Add any necessary styling here */
</style>
