<template>
    <div v-if="employee" class="document-detail">
        <h2>{{ employee.firstName }} {{ employee.lastName }}</h2>
        <p><strong>Паспорт:</strong> {{ employee.passport }}</p>
        <p><strong>Дата рождения:</strong> {{ employee.birthDate }}</p>
        <p><strong>Пол:</strong> {{ employee.gender }}</p>
        <p><strong>Активен:</strong> {{ employee.active ? 'Да' : 'Нет' }}</p>
    </div>
    <v-progress-circular v-else indeterminate color="primary" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useEmployeeStore } from '@/stores/employee'

const route = useRoute()
const employeeStore = useEmployeeStore()
const employee = ref(null)

onMounted(async () => {
    employee.value = await employeeStore.getEmployee(route.params.id)
})
</script>

<style>
.document-detail {
    padding: 20px;
}
</style>
