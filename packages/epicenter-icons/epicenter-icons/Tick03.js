import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.70711 13.2929L4.29289 11.7071C4.68342 11.3166 5.31658 11.3166 5.70711 11.7071L8.5 14.5L17.7945 4.27601C18.1786 3.85354 18.8378 3.83785 19.2416 4.24158L21.2929 6.29289C21.6834 6.68342 21.6834 7.31658 21.2929 7.70711L9.20711 19.7929C8.81658 20.1834 8.18342 20.1834 7.79289 19.7929L2.70711 14.7071C2.31658 14.3166 2.31658 13.6834 2.70711 13.2929Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tick03',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
