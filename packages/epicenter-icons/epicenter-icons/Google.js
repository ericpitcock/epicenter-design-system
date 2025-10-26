import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.5371 8.46599C14.6321 7.56027 13.3815 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Google',
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
