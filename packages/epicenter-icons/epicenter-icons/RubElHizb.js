import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.7929 11.2929L13.2071 2.70711C12.8166 2.31658 12.1834 2.31658 11.7929 2.70711L3.20711 11.2929C2.81658 11.6834 2.81658 12.3166 3.20711 12.7071L11.7929 21.2929C12.1834 21.6834 12.8166 21.6834 13.2071 21.2929L21.7929 12.7071C22.1834 12.3166 22.1834 11.6834 21.7929 11.2929Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19 19.5C19.5523 19.5 20 19.0523 20 18.5V5.5C20 4.94771 19.5523 4.5 19 4.5H6C5.44772 4.5 5 4.94771 5 5.5V18.5C5 19.0523 5.44772 19.5 6 19.5H19Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '12.5', 'cy': '12', 'r': '2', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'RubElHizb',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 25 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
