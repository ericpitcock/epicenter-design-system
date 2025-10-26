import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 2C7 2 5 8 5 17C7.72481 17 12.9245 16.175 16.1033 12.2773C16.6834 11.5661 16.5448 10.5448 15.8958 9.89582L14.5 8.5C20 7 20 3 20 2Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 22C4 17 7 12.5 10.5 10', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'QuillWrite01',
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
