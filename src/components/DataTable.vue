<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h3>Magneticnduktive Seilinspektion</h3>
            </div>
            <AppDemoActions />
        </div>

        <!-- <div class="content-section implementation">
            <div class="card">
                <DataTable :value="data" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div> -->
    </div>
</template>

<script lang="ts">
import DataService from '../service/DataService';
export default {
    data() {
        return {
            data: null
        };
    },
    dataService: null,
    created() {
        this.dataService = new DataService();
    },
    mounted() {
        this.dataService.getAll().then((data) => (this.data = data));
    }
};
</script>