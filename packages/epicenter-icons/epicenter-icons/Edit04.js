import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.7071 5.87868L18.1213 3.29289C17.7308 2.90237 17.0976 2.90237 16.7071 3.29289L3.29289 16.7071C3.10536 16.8946 3 17.149 3 17.4142V21H6.58579C6.851 21 7.10536 20.8946 7.29289 20.7071L20.7071 7.29289C21.0976 6.90237 21.0976 6.26921 20.7071 5.87868Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 21H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M14.5 5.5L18.5 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Edit04',
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
