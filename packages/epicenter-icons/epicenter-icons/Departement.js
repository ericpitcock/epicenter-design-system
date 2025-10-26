import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 22H19C20.1046 22 21 21.1046 21 20V7.5C21 6.74246 20.572 6.04993 19.8944 5.71115L12.8944 2.21115C12.3314 1.92962 11.6686 1.92962 11.1056 2.21115L4.10557 5.71115C3.428 6.04993 3 6.74246 3 7.5V20C3 21.1046 3.89543 22 5 22Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 13H8M16 13H14M10 9H8M10 17H8M16 9H14M16 17H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Departement',
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
