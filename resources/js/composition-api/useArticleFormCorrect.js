import { ref ,getCurrentInstance} from "vue";

export default function useArticleForm() {

    const router = getCurrentInstance().proxy.$router;

    const form = ref({
        title: "",
        category: "",
        author: "",
        text: "",
        image: null,
    });

    const errors = ref({});
    const generalError = ref(null);

    const article = ref([]);
    const  categories  = ref([]);

   

    const getArticlesByCategory = async () => {
        try {
            const response = await fetch('/api/articles-by-category'); 
            if (!response.ok) {
                throw new Error('Failed to fetch articles by category');
            }
            const data = await response.json();
            console.log(data)

            categories.value = data;
        } catch (error) {
            console.error('Error fetching articles by category:', error);
        }
    };

   

    const submitForm = async () => {
        const formData = new FormData();
        formData.append("title", form.value.title);
        formData.append("category", form.value.category);
        formData.append("author", form.value.author);
        formData.append("text", form.value.text);
        formData.append("image", form.value.image);

        try {
            const response = await fetch("/api/articles", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 422) {
                    errors.value = data.errors; // Set validation errors
                } else {
                    generalError.value =
                        "Failed to create article. Please try again."; // Set general error message
                }
            } else {
                console.log("Article created:", data);

                
                router.push({ name: 'SingleArticle', params: { articleId: data.id } });
               
              
            }
        } catch (error) {
            console.error("Error creating article:", error);
            generalError.value = "Failed to create article. Please try again."; // Set general error message
        }
    };

    
    const getArticle = async (id) => {
        let response = await axios.get(`/api/article/` +id)
        article.value = response.data.data
    }

    const submitEditForm = async (id) => {
        errors.value = ''
        try{
            await axios.put(`/api/articles/` + id, article.value)
            await router.push({ name: 'SingleArticle', params: { articleId: data.id } });

        } catch(e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors
                }
            }
        }
    }

    const handleFileUpload = (event) => {
        form.value.image = event.target.files[0];
    };


    return { form, errors, generalError, submitForm, handleFileUpload, submitEditForm , getArticle, article, categories, getArticlesByCategory};
}
