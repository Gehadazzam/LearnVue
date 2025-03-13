import {createRouter} from 'vue-router';
import {createWebHistory} from 'vue-router';
import CountryDetails from '@/views/CountryDetails.vue';



const route = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('@/views/TheHome.vue')
		},
		{
			path: '/CountryDetails/:ccn3',
			name: 'CountryDetails',
			component: CountryDetails
		}

	]
});

export default route;