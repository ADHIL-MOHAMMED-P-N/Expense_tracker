<template>

<h1>Report</h1>

<line-chart :data="chartData"></line-chart>

</template>

<script>
export default {
    name:"Report",
    data(){
        return{
            chartData:{
                '2017-05-13':2
            }
        }
    }
}
</script>