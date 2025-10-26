import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.5 21.5V4.5C3.5 3.39543 4.39543 2.5 5.5 2.5H13.5C14.6046 2.5 15.5 3.39543 15.5 4.5V21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3.5 10.5H15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M2.5 21.5H16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M15.5 14.5H16.5C17.6046 14.5 18.5 15.3954 18.5 16.5V17C18.5 17.8284 19.1716 18.5 20 18.5C20.8284 18.5 21.5 17.8284 21.5 17V11.5M20.5 7.5L21.5 8.5V11.5M20.5 7.5L18.5 5.5M20.5 7.5V10.5L21.5 11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PetrolPump',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
