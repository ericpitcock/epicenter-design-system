import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.5 16.5H12.9995L15.5 21L17.5 14L19.9976 18.5H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9.5 22.0015H4.5C3.39543 22.0015 2.5 21.1061 2.5 20.0015V9.81667C2.5 9.28553 2.71128 8.7762 3.08724 8.40101L8.91585 2.58434C9.2908 2.21015 9.79889 2 10.3286 2H17.5C18.6046 2 19.5 2.89543 19.5 4V10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.5 9.00195H7.5C8.60457 9.00195 9.5 8.10652 9.5 7.00195V2.00195', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MedicalFile',
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
