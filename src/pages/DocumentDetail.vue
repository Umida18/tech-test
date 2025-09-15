<template>
    <div v-if="document" class="document-detail">
        <p><strong>Номер документа:</strong> {{ document.number }}</p>
        <p><strong>Тип документа:</strong> {{ document.type }}</p>
        <p><strong>Описание:</strong> {{ document.description }}</p>
        <p><strong>Дата создания:</strong> {{ new Date(document.createdAt).toLocaleDateString() }}</p>
    </div>
    <v-progress-circular v-else indeterminate color="primary" />
</template>

<script setup>
import { useDocumentStore } from '@/stores/document'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const documentStore = useDocumentStore()
const document = ref(null)

onMounted(async () => {
    document.value = await documentStore.getDocument(route.params.id)
})
</script>

<style>
.document-detail {
    padding: 20px;
}
</style>
