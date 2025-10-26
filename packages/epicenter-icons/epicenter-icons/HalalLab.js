import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 3H3V21H7C7 18.2386 9.23858 16 12 16C14.7614 16 17 18.2386 17 21H21C21 16.0294 16.9706 12 12 12C10.1499 12 8.4301 12.5583 7 13.5155V3Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 3C12 7.97056 16.0294 12 21 12V8C18.2386 8 16 5.76142 16 3H12Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HalalLab',
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
