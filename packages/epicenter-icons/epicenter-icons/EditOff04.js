import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.5 5.5L18.5 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M3 3L21 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16 12L20.7071 7.29289C21.0976 6.90237 21.0976 6.26921 20.7071 5.87868L18.1213 3.29289C17.7308 2.90237 17.0976 2.90237 16.7071 3.29289L12 7.99999M14 14L7.29289 20.7071C7.10536 20.8946 6.851 21 6.58579 21H3V17.4142C3 17.149 3.10536 16.8946 3.29289 16.7071L9.99999 9.99999', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EditOff04',
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
