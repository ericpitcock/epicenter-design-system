import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20.5 14C20.5 18.4183 16.6944 22 12 22C7.30558 22 3.5 18.4183 3.5 14C3.5 9.58172 7.30558 6 12 6C16.6944 6 20.5 9.58172 20.5 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 6C12 4.66667 12.6 2 15 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 6C11.5 4.83333 12 2 6 2C6.33333 3 7 6 12 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Orange',
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
