import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.4 4C17.85 9.33333 15.6 20 9.63158 20C5.96906 20 3 16.4183 3 12C3 7.58172 5.96906 4 9.63158 4C18.3 4.88889 13.8 20 19.5376 20C20.6022 20 21 19.1111 21 18.2222', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Alpha',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
