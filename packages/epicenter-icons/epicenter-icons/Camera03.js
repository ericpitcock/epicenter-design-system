import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7H17L15.5528 4.10557C15.214 3.428 14.5215 3 13.7639 3H10.2361C9.47852 3 8.786 3.428 8.44721 4.10557L7 7ZM7 7H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 14C15.5 15.933 13.933 17.5 12 17.5C10.067 17.5 8.5 15.933 8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 10V10.01', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Camera03',
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
