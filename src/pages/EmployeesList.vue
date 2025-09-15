<template>
    <v-progress-circular v-if="employeeStore.loading" indeterminate color="primary" />

    <v-container>
        <v-card>
            <v-card-title>Сотрудники</v-card-title>
            <v-data-table
                :headers="headers"
                :items="employeeStore.employees"
                class="elevation-1"
                :loading="employeeStore.loading"
                @click:row="goToDetail"
            >
                <template v-slot:item.gender="{ item }">
                    {{ item.gender === 'male' ? 'Мужской' : 'Женский' }}
                </template>

                <template v-slot:item.active="{ item }">
                    <v-checkbox v-model="item.active" disabled hide-details />
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useEmployeeStore } from '@/stores/employee'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const employeeStore = useEmployeeStore()
        const router = useRouter()

        const page = ref(1)
        const limit = 5

        function loadPage() {
            employeeStore.fetchEmployees(page.value, limit)
        }

        function goToDetail(event, row) {
            router.push(`/employees/${row.item.id}`)
        }

        onMounted(() => {
            loadPage()
        })
        console.log('nwdhbb', employeeStore)

        return {
            employeeStore,
            goToDetail
        }
    }
}
</script>
<style></style>
