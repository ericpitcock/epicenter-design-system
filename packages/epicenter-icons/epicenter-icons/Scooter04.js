import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '4', 'cy': '18', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '20', 'cy': '18', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6.51383 18.0002L15 18C15 15.2386 17.2386 13 20 13L17.9069 5.46471C17.6664 4.59907 16.8782 4 15.9798 4H15M16 15L4 16.0002', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Scooter04',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
