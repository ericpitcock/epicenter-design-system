import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 10H13M5 14H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 17.6076C17.8693 19.6404 15.812 21 13.4615 21C9.89293 21 7 17.866 7 14V10C7 6.13401 9.89293 3 13.4615 3C15.812 3 17.8693 4.35958 19 6.39241', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Euro',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
