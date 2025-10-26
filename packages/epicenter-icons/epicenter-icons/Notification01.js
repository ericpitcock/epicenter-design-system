import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5 18C15.5 19.933 13.933 21.5 12 21.5C10.067 21.5 8.5 19.933 8.5 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M19.2311 18H4.76887C3.79195 18 3 17.208 3 16.2311C3 15.762 3.18636 15.3121 3.51809 14.9803L5 13.4984V9.5C5 5.63401 8.13401 2.5 12 2.5C15.866 2.5 19 5.634 19 9.5V13.4984L20.4819 14.9803C20.8136 15.3121 21 15.762 21 16.2311C21 17.208 20.208 18 19.2311 18Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Notification01',
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
