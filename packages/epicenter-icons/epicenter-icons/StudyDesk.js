import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.182 3.56064C14.4009 2.77959 13.1346 2.77959 12.3536 3.56064L12 3.9142L14.8284 6.74262L15.182 6.38907C15.963 5.60802 15.963 4.34169 15.182 3.56064ZM15.182 3.56064L16.2542 2.6402C16.6682 2.28485 17.2905 2.32686 17.653 2.73461L20.0654 5.44857C20.6261 6.07932 20.7305 6.99413 20.3264 7.735L18 12', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 12H2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20 17H13C12.4477 17 12 16.5523 12 16V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 12V22M20 12V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 12V7C7 6.44772 7.44772 6 8 6H9C9.55228 6 10 6.44772 10 7V12' })
const _hoisted6 = h('path', { 'd': 'M4 12V7C4 6.44772 4.44772 6 5 6H6C6.55228 6 7 6.44772 7 7V12' })

export default defineComponent({
    name: 'StudyDesk',
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
