import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 7L12.8944 11.5528C12.3314 11.8343 11.6686 11.8343 11.1056 11.5528L2 7', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Mail01',
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
