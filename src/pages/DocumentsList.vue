<template>
    <v-container>
        <v-card>
            <v-card-title>Документы</v-card-title>
            <v-data-table
                :headers="headers"
                :items="documentStore.documents"
                class="elevation-1"
                @click:row="goToDetail"
            >
                <template v-slot:item.createdAt="{ item }">
                    {{ new Date(item.createdAt).toLocaleDateString() }}
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
import { useDocumentStore } from '@/stores/document'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const documentStore = useDocumentStore()
        console.log(documentStore)

        const page = ref(1)
        const limit = 5

        function loadPage() {
            documentStore.fetchDocuments(page.value, limit)
        }

        function goToDetail(event, row) {
            router.push(`/documents/${row.item.id}`)
        }

        onMounted(() => {
            loadPage()
        })

        return {
            documentStore,
            goToDetail
        }
    }
}
</script>
