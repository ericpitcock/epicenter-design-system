import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.02769 12C2.02769 12 1.03077 22 11 22L10.0031 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21.9723 12C21.9723 12 22.9692 2 13 2L13.9969 4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.6607 6.06066C11.0749 5.47487 10.1251 5.47487 9.53934 6.06066L6.06066 9.53934C5.47487 10.1251 5.47487 11.0749 6.06066 11.6607L12.3393 17.9393C12.9251 18.5251 13.8749 18.5251 14.4607 17.9393L17.9393 14.4607C18.5251 13.8749 18.5251 12.9251 17.9393 12.3393L11.6607 6.06066Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ScreenRotation',
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
