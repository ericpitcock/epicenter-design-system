import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 22V20C18 18.8954 17.1046 18 16 18H8C6.89543 18 6 18.8954 6 20V22', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 22H20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 18L7.27198 7.19987C7.11563 6.22269 7.69743 5.27809 8.64045 4.97804L16.4056 2.50732C17.1264 2.27796 17.8311 2.90105 17.6917 3.64453L15 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Award03',
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
