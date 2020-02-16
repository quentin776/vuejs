<template>
    <div>
        <b-card no-body class="overflow-hidden" >
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img 
                    :src="filmContent.Poster" class="rounded-2">
                    </b-card-img>
                </b-col>
                <b-col md="5">
                    <b-card-body 
                    :title="filmContent.Title">
                        <b-card-text>
                            {{(filmName.Released)? 'Le film se nome ' + filmName.Released : ''}}

  
                        </b-card-text>
                        <b-button 
                        :href="`#/details/${filmContent.imdbID}`">
                            Plus d'information
                        </b-button>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
export default {
    name:'film',
    props:{
        filmContent:{
            type: Object,
            default : null,
        }
    }
}
</script>

<style>
</style>