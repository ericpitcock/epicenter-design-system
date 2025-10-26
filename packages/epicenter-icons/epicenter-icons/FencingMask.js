import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.9996 20.0001C15.5002 20.0001 20 14.2945 20 9.84114C20 4.64409 16.5709 1.98295 11.9996 2.00008C7.42842 2.01721 4 4.64407 4 9.84112C4 14.2945 8.49907 20.0001 11.9996 20.0001Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 2V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4.5 8C8 10 16 10 19.5 8', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4.5 13C8 15 16 15 19.5 13', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M6 16C6 18.4 5 20.8 3 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M18 16C18 18.4 19 20.8 21 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FencingMask',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
